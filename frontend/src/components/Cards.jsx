import { useQuery } from "@apollo/client";
import Card from "./Card";
import { GET_TRANSACTIONS } from "../graphql/queries/transaction.query";
import { toast } from "react-hot-toast";
const Cards = () => {
	const {data,loading, error} = useQuery(GET_TRANSACTIONS);
	if(error) return toast.error(error.message);
	//TODO => Add Relationship between User and Transaction
	return (
		<div className='w-full px-10 min-h-[40vh]'>
			<p className='text-5xl font-bold text-center my-10'>History</p>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-start mb-20'>
				{!loading && data.transactions.map(transaction => (
					<Card key={transaction._id} transaction={transaction} />
				))}
			</div>
			{!loading && data?.transactions?.length === 0 && (
				<div className='flex flex-col items-center w-full'>
					<img src="/empty.gif" alt="no transaction" className='w-1/2' />
				</div>
			)}
		</div>
	);
};
export default Cards;