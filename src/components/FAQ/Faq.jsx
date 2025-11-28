import React, { useState } from 'react'
import {questionAns} from "../../Data/Faq"
const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleTogle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }
    return (
        <div>
            <div className="py-10">
                <div className="text-2xl font-bold">Frequently Asked Questions</div>
                {questionAns.map((item, index) => {
                    return (
                        <div>
                            <div onClick={() => handleTogle(index)} className="cursor-pointer text-2xl bg-gray-800 p-5 flex items-center justify-between px-10 mt-3">
                                <div className="">{item.question}</div>
                                <div className="text-5xl duration-500 ">
                                    {activeIndex === index ? "x" : "+"}
                                </div>
                            </div>
                            <div className={`bg-gray-800 overflow-hidden text-xl ${activeIndex === index ? "max-h-[500px] py-4" : "max-h-0 py-0"} duration-500 px-5  mt-1`}>
                                {item.answer}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Faq
