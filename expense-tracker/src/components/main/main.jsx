import { Flex,Heading,Button, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary/summary";
import ExpenseView from "../expense-view/expenseView";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";


export default function Main(){

    const {isOpen,onOpen,onClose}= useDisclosure()
    const {totalExpense,setTotalExpense,totalIncome,setTotalIncome,allTransaction}=useContext(GlobalContext)

    
    useEffect(()=>{
        let income =0;
        let expense = 0;

        allTransaction.forEach(item=>{

            item.currentFormData.type === 'income'? income = income + parseFloat(item.currentFormData.amount) : expense = expense + parseFloat(item.currentFormData.amount)
        })
        setTotalExpense(expense)
        setTotalIncome(income)

    },[allTransaction])
    return <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
            <Heading color={'blue.400'} display={['none','block','block','block','block']}>
                Expense Tracker
            </Heading>
            <Flex alignItems={'center'} >
                <Button onClick={onOpen} bg={'blue.500'} color={'white'} ml={'4'} _hover={{background:"blue.600"}}>
                    Add New Transaction    
                </Button>
            </Flex>
        </Flex>
        <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose}/>
        <Flex w='full' alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column','column','column','row','row']}>
            <ExpenseView data={allTransaction.filter(item=>item.currentFormData.type === 'expense')} type={'expense'}/>
            <ExpenseView data={allTransaction.filter(item=>item.currentFormData.type === 'income')} type={'income'}/>
        </Flex>

    </Flex>
}