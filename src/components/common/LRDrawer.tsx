import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'

interface Props {
    buttonTitle?: React.ReactNode | string | undefined
    drawerTitle?: React.ReactNode | string
    children: React.ReactNode
}

const LRDrawer = ({ buttonTitle, drawerTitle, children }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={() => onOpen()} key={'full'} _hover={{ background: "none" }} background="none">
                {buttonTitle ?
                    buttonTitle
                    :
                    <Icon as={GiHamburgerMenu} fill="var(--lr-font-color-main)" fontSize="var(--lr-font-size-20)" />
                }
            </Button>

            <Drawer onClose={onClose} isOpen={isOpen} size={'full'}>
                <DrawerOverlay />
                <DrawerContent backgroundColor="var(--lr-color-bg)">
                    <DrawerCloseButton h="65px" display="flex" alignItems="center"/>
                    <DrawerHeader h="80px" flex="unset" display="flex" alignItems="center" borderBottom="1px solid var(--lr-border-color-alpha-100)">{drawerTitle}</DrawerHeader>
                    <DrawerBody backgroundColor="var(--lr-color-accent-100)">
                        {children}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default LRDrawer
