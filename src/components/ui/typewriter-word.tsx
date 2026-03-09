"use client"

import { useEffect, useState } from "react"

interface TypewriterWordProps {
    words: string[]
    typingSpeed?: number
    deleteSpeed?: number
    waitTime?: number
    className?: string
}

export default function TypewriterWord({
    words,
    typingSpeed = 55,
    deleteSpeed = 35,
    waitTime = 1200,
    className = "",
}: TypewriterWordProps) {
    const [textIndex, setTextIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)

    const currentWord = words[textIndex]

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (!isDeleting) {
            if (displayText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length + 1))
                }, typingSpeed)
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true)
                }, waitTime)
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length - 1))
                }, deleteSpeed)
            } else {
                setIsDeleting(false)
                setTextIndex((prev) => (prev + 1) % words.length)
            }
        }

        return () => clearTimeout(timeout)
    }, [
        displayText,
        isDeleting,
        currentWord,
        typingSpeed,
        deleteSpeed,
        waitTime,
        words.length,
    ])

    const longestWord = words.reduce((a, b) =>
        a.length > b.length ? a : b
    )

    return (
        <span className="relative inline-block align-baseline">
            {/* Invisible width keeper */}
            <span className="invisible absolute whitespace-nowrap">
                {longestWord}_
            </span>

            <span className={`whitespace-nowrap ${className}`}>
                {displayText}
                <span className="ml-1 animate-blink">_</span>
            </span>
        </span>
    )
}