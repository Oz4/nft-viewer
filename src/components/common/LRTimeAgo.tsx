import React from "react"
import TimeAgo from "react-timeago"// @ts-ignore
import englishStrings from "react-timeago/lib/language-strings/en"// @ts-ignore
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import { Tooltip } from "@chakra-ui/react"
import { convertTimestampToDate } from "utils"

const formatter = buildFormatter(englishStrings)

const TooltipRef = React.forwardRef(({ children, ...rest }: { children?: React.ReactNode }, ref: React.LegacyRef<HTMLDivElement>) => (
  <div ref={ref} {...rest}>
    {children}
  </div>
))

export default function LRTimeAgo({ timestamp }: { timestamp: number }) {
  return (
    <Tooltip
      label={convertTimestampToDate(timestamp)}
      openDelay={300}
      placement="bottom"
      hasArrow
      p="1rem"
      bg="var(--lr-color-accent-100)"
    >
      
      <TooltipRef>
        <TimeAgo date={timestamp * 1000} formatter={formatter} title="" />
      </TooltipRef>

    </Tooltip>
  )
}
