// import transaction from "../models/transaction.model.js";
import Transaction from "../models/transaction.model.js";
import User from "../models/user.model.js";

const transactionResolver = {
    Query: {
        transactions: async(_, __, context) =>{
            try {
                if(!context.getUser()) throw new Error("Unauthorized");
                const userId = await context.getUser()._id;
                
                const transactions = await Transaction.find({ userId });
                return transactions;
            } catch (err) {
                console.error("Error getting the transactions:", err);
                throw new Error("Error getting transactions");
            }
        },
        transaction: async(_,{ transactionId },) =>{
            try{
                const transaction = await Transaction.findById(transactionId);
                return transaction;
            }catch(err){
                console.error("Error getting the transaction:", err);
                throw new Error("Error getting transaction");
            }
        },
        // TODO => Add category Statistics Query 
        // Define a new asynchronous function called categoryStatistics
        categoryStatistics: async (_, __, context) => {
			if (!context.getUser()) throw new Error("Unauthorized");

			const userId = context.getUser()._id;
			const transactions = await Transaction.find({ userId });
			const categoryMap = {};

			// const transactions = [
			// 	{ category: "expense", amount: 50 },
			// 	{ category: "expense", amount: 75 },
			// 	{ category: "investment", amount: 100 },
			// 	{ category: "saving", amount: 30 },
			// 	{ category: "saving", amount: 20 }
			// ];

			transactions.forEach((transaction) => {
				if (!categoryMap[transaction.category]) {
					categoryMap[transaction.category] = 0;
				}
				categoryMap[transaction.category] += transaction.amount;
			});

			// categoryMap = { expense: 125, investment: 100, saving: 50 }

			return Object.entries(categoryMap).map(([category, totalAmount]) => ({ category, totalAmount }));
			// return [ { category: "expense", totalAmount: 125 }, { category: "investment", totalAmount: 100 }, { category: "saving", totalAmount: 50 } ]
		},
    },
    Mutation: {
        createTransaction: async(_, {input}, context) => {
            try {
                const newTransaction = new Transaction({
                    ...input, //Using ...(three dots) will basically take all the inputs which are defined in the typeDef Transaction
                    userId: context.getUser()._id
                })
                await newTransaction.save();
                return newTransaction; 
            } catch (err) {
                console.error("Error creating Transaction", err);
                throw new Error("Error creating Transaction");
            }
        },
        updateTransaction: async(_, { input}) => {
            try {
                const updatedTransaction = await Transaction.findByIdAndUpdate(input.transactionId, input, {new:true}); //The findByIdAndUpdate finds the transaction(in this case) by its transactionId and then updates it and returns the old value and new updated value but if in the parenthesis {new: true} is set then it will just return the updated value.
                return updatedTransaction;
            } catch (err) {
                console.error("Error Updating the Transaction", err);
                throw new Error("Error updating transaction");
            }
        },
        deleteTransaction: async(_, {transactionId}) => {
            try {
            const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);
            return deletedTransaction;
            } catch (err) {
                console.error("Error deleting transaction: ", err);
                throw new Error("Error deleting transactions: ");
            }
        },
    },
    //TODO => Add Transaction/User Relationship
    Transaction:{
        user : async(parent) =>{
            const userId = parent.userId;
            try {
                const user = await User.findById(userId);
                return user;
            } catch (err) {
                console.log("Error in Transaction.users resolver: ", err);
                throw new Error(err.message || "Internal server error");
            }
        }
    }
};

export default transactionResolver;
