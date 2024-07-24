import { Button,FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";


export default function TransactionForm({onClose,isOpen}){
    
    const {formData,setFormData,value,setValue,handleFormSubmit} =useContext(GlobalContext)
    
    function handleFormChange(event){
        setFormData({
            ...formData,
            [event.target.name] : event.target.value,
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        handleFormSubmit(formData)
    }


    return <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input placeholder="Enter Transaction Description" onChange={handleFormChange} name="description" type="text"/>
                        </FormControl>
                        <FormControl>
                             <FormLabel>Enter Amount </FormLabel>
                             <Input placeholder="Enter Transaction Amount" onChange={handleFormChange} name="amount" type="number"/>
                        </FormControl>
                        <RadioGroup mt={'5'} value={value} onChange={setValue}>
                            <Radio checked={formData.type === 'income'} onChange={handleFormChange} value="income" colorScheme="blue" name="type" mr={'6'}>Income</Radio>
                            <Radio checked={formData.type === 'expense'} onChange={handleFormChange} value="expense" colorScheme="red" name="type">Expense</Radio>
                        </RadioGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button type='submit' onClick={onClose}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </form>
    </Modal>
}