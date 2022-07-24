import { Flex, Spinner } from "@chakra-ui/react"
import InfiniteScroll from "react-infinite-scroll-component"

interface Props {
    items: any[] | undefined
    fetchNext: () => any
    hasNextPage: boolean | undefined
    children: React.ReactNode
}

// If I had more time I would implement a good scroll handler but this one will do the job to navigate between different collection assets
const LRInfiniteScroll = ({
    items,
    fetchNext,
    hasNextPage,
    children

}: Props) => {

    return (
        <InfiniteScroll
            dataLength={items?.length || 0}
            next={() => fetchNext()}
            hasMore={hasNextPage || false}
            loader={
                <Flex minH="280px" minW="180px" align="center" justify="center">
                    <Spinner
                        color="var(--lr-color-accent-green)"
                        w="100px"
                        h="100px"
                        speed="0.8s"
                    />
                </Flex>
            }
            style={{// replacement for chakara <Grid/>
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
                overflow: "hidden"
            }}

            scrollThreshold={1}
        >
            {children}
        </InfiniteScroll>
    )
}

export default LRInfiniteScroll