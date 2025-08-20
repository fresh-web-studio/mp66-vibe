import Services from '@/sections/Services'

export const metadata = {
    title: 'Услуги - ',
}

export default () => {
    return (
        <>
            <div className="bg-none container">
                <h1>Услуги</h1>
                <Services />
            </div>
        </>
    )
}