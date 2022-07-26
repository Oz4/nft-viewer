import React from "react"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"

interface Props {
  children?: React.ReactNode
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

const LRModal = ({ children, isOpen, setOpen, title }: Props) => {
  
  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)}>

      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(10deg)" />

      <ModalContent bg="var(--lr-color-bg)">
        <ModalHeader bg="var(--lr-color-accent-100)">{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pt="none">{children}</ModalBody>
      </ModalContent>

    </Modal>
  )

}

export default LRModal