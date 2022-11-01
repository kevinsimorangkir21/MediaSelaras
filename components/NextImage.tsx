import React from 'react'

import Image, {ImageProps} from 'next/image'

type NextImageProps = {
    width:string | number,
    height: string | number,
    src:string,
    alt:string,
    className?: string
  } & (
    | { width: string | number; height: string | number }
    | { layout: 'fill'; width?: string | number; height?: string | number }
  )  & ImageProps;


export default function NextImage({src, width, height, alt, className, ...rest} : NextImageProps) {
  const widthIsSet = className?.includes('w-') ?? false;
  return(
    <figure
      style={!widthIsSet ? { width: `${width}px` } : undefined}
      className={className}
    >
    <Image src={src} width = {width} height={height} alt={alt} layout='responsive' {...rest}/>
    </figure>
  ) 
}