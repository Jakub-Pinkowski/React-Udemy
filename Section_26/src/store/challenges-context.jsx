import { createContext, useState } from 'react'

const DUMMY_CHALLENGES = [
    {
        id: Math.random().toString(),
        title: 'Complete 50 push-ups',
        description: 'Do 50 push-ups in one set',
        deadline: new Date(2022, 8, 1),
        image: { src: '/src/assets/constructing.png', alt: 'Person working on some furniture.' },
        status: 'active',
    },
    {
        id: Math.random().toString(),
        title: 'Run 5 miles',
        description: 'Run 5 miles without stopping',
        deadline: new Date(2022, 8, 2),
        image: { src: '/src/assets/constructing.png', alt: 'Person working on some furniture.' },
        status: 'active',
    },
    {
        id: Math.random().toString(),
        title: 'Read 100 pages',
        description: 'Read 100 pages of a book',
        deadline: new Date(2022, 8, 3),
        image: { src: '/src/assets/constructing.png', alt: 'Person working on some furniture.' },
        status: 'active',
    },
]
export const ChallengesContext = createContext({
    challenges: [],
    addChallenge: () => {},
    updateChallengeStatus: () => {},
})

export default function ChallengesContextProvider({ children }) {
    const [challenges, setChallenges] = useState(DUMMY_CHALLENGES)

    console.log(challenges)

    function addChallenge(challenge) {
        setChallenges((prevChallenges) => [
            { ...challenge, id: Math.random().toString(), status: 'active' },
            ...prevChallenges,
        ])
    }

    function deleteChallenge(challengeId) {
        setChallenges((prevChallenges) =>
            prevChallenges.filter((challenge) => challenge.id !== challengeId)
        )
    }

    function updateChallengeStatus(challengeId, newStatus) {
        setChallenges((prevChallenges) =>
            prevChallenges.map((challenge) => {
                if (challenge.id === challengeId) {
                    return { ...challenge, status: newStatus }
                }
                return challenge
            })
        )
    }

    const challengesContext = {
        challenges,
        addChallenge,
        deleteChallenge,
        updateChallengeStatus,
    }

    return (
        <ChallengesContext.Provider value={challengesContext}>
            {children}
        </ChallengesContext.Provider>
    )
}
