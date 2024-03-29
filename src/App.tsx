import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotal from "./components/OrderTotal"
import TipPercentage from "./components/TipPercentage"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder  } = useOrder()
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Men&uacute;</h2>
          <div className="space-y-3 mt-10">
          {menuItems.map(item =>(
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
          </div>
        </div>

        <div className="p-5">
          <h2 className='font-black text-4xl'>
            Consumo
          </h2>
          <div className="space-y-3 mt-10">
            {order.length > 0 ? (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />

                <TipPercentage
                  setTip={setTip}
                  tip={tip}
                />

                <OrderTotal 
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
            <p className="text-center">
              La orden esta vacia
            </p> 
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
