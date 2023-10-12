import srcCopper from '/src/assets/images/copper.png';

function Card() {
    return (
        <div className='w-60 p-1 shadow-md rounded-md' style={{ 'background': '#454644' }}>
            <div className='px-1 pt-1 pb-2'>
                <div className='p-1 rounded-md shadow' style={{ 'background': '#848079' }}>
                    <div className='p-2 rounded-md shadow' style={{ 'background': '#a5a59b' }}>
                        <p className='text-xl'>Cobre</p>
                    </div>
                </div>
            </div>
            <img src={srcCopper} />
            <div className='px-1 pt-2 pb-1'>
                <div className='p-1 rounded-md shadow' style={{ 'background': '#848079' }}>
                    <div className='p-2 rounded-md shadow' style={{ 'background': '#a5a59b' }}>
                        <span>Se trata de un metal de transición de color rojizo anaranjado.</span>
                        <br />
                        <span className='italic'>"El cobre es uno de los primeros metales que la humanidad comenzó a utilizar."</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className='h-screen overflow-y-auto'>
            <div className='container mx-auto py-5'>
                <h1 className='text-center text-3xl'>Compras</h1>
                <div className='flex flex-row flex-wrap justify-center content-start gap-5 pt-5 pb-20'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className='fixed bottom-5 inset-x-0 overflow-visible' >
                <div className='flex flex-row justify-center w-fit mx-auto rounded-md p-2 gap-2 shadow-md' style={{ 'background-color': '#a4957b' }}>
                    <button type='button' className='btn'>
                        Compras
                    </button>

                    <button type='button' className='btn'>
                        Terrenos
                    </button>

                    <button type='button' className='btn'>
                        Maquinarias
                    </button>

                    <button type='button' className='btn'>
                        Inventario
                    </button>

                    <button type='button' className='btn'>
                        Ventas
                    </button>

                    <button type='button' className='btn'>
                        Gráficas
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
