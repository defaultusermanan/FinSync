import transaction from "../models/transaction.model.js";
import Transaction from "../models/transaction.model.js";

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
    },
    Mutation: {
        createTransaction: async(_, {input}) => {
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
};

export default transactionResolver;
