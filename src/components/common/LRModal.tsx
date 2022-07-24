import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import React from "react"

interface Props {
  children?: React.ReactNode
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
}

export default function LRModal({ children, isOpen, setOpen, title }: Props) {
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
