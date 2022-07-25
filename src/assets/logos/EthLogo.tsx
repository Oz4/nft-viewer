import React from 'react'

interface Props {
  width: string
  heigth: string
}

const EthLogo = ({ width, heigth }: Props) => {
  return (
    <svg viewBox="0 0 48 96" focusable="false" width={width} height={heigth}>
      <path
        d="M23.9932 8.91386L23.4688 10.6953V62.3843L23.9932 62.9075L47.9862 48.725L23.9932 8.91386Z"
        fill="#767676"
      ></path>
      <path
        d="M23.9936 8.91386L0 48.725L23.9936 62.9075V37.8191V8.91386Z"
        fill="#8E8E8E"
      ></path>
      <path
        d="M23.9914 67.4523L23.6958 67.8128V86.2251L23.9914 87.088L47.9991 53.2772L23.9914 67.4523Z"
        fill="#5F5F5F"
      ></path>
      <path
        d="M23.9936 87.088V67.4523L0 53.2772L23.9936 87.088Z"
        fill="#8E8E8E"
      ></path>
      <path
        d="M23.9937 62.9066L47.9867 48.7242L23.9937 37.8183V62.9066Z"
        fill="#5F5F5F"
      ></path>
      <path
        d="M0 48.7242L23.9936 62.9066V37.8183L0 48.7242Z"
        fill="#767676"
      ></path>
    </svg>
  )
}

export default EthLogo
