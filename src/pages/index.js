import React from "react";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";


export default function Home(){
  return(
    <PageWrapper showButton={false} showHeader={true}>
      <div className="w-full h-full flex items-start justify-start pl-2">
        <h1 className="text-white text-[30px] font-bold">Encontre seu par perfeito <br /> 
          em qualquer esporte.</h1>
      </div>
    </PageWrapper>
  )
}