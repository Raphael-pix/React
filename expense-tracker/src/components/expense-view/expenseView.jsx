import { Box,Flex,Heading,Text } from "@chakra-ui/react"

export default function ExpenseView({type,data}){
    return<Box flex={1} w='full' bg={'white'} mr={'4'} mt={'10'} p={'5'} pb={'4'} border={'1px solid'} borderColor={'gray.100'} borderRadius={'12'}>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
            <Heading size={'md'} color={'red.700'}>
                {type === 'income' ? 'Income' : 'Expense'}
            </Heading>
        </Flex>
        {
            data.map(item=><>
            {console.log(item)}
                <Flex bg={type === 'expense' ? 'red.50' : 'blue.50'} mt={'4'} justifyContent={'center'} alignItems={'center'} border={'1px solid'} borderColor={type === 'expense' ? 'red.100' : 'blue.100'} p={'4'} borderRadius={'8'}> 
                    <Flex alignItems={'center'} flex={'1'} justifyContent={'space-between'}>
                        <Text ml={'3'} fontWeight='bold' color='gray.600'>{item.currentFormData.description}</Text>
                        <Text ml={'3'} fontWeight='bold' color='gray.600'>${item.currentFormData.amount}</Text>
                    </Flex>
                </Flex> 
            </>)
        }

    </Box>
}