import { FC } from 'react'

interface HelloProps {
    children?: React.ReactNode
}

const Hello: FC<HelloProps> = ({ children }) => {
    return (
        <>
            <div className="bg-red-900 text-lg">
                Hello
                {children}
            </div>
            <div className="bg-red-900 text-lg">
                Hello
                {children}
            </div>
        </>
    );
}

export default Hello;