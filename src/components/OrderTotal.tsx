import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
  order: OrderItem[],
  tip:number,
  placeOrder: () => void

}


export default function OrderTotal({order, tip, placeOrder} : OrderTotalProps) {
  
  const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ), [order])

  const tipAmmount = useMemo(() => subTotalAmount * tip, [tip, order])
  const totalAmount = useMemo(() => subTotalAmount + tipAmmount, [tip, order])

  //useCallBack
  // const tipAmmount = useCallback(() => subTotalAmount() * tip , [tip, order])
  
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">
          Totales y propinas:
        </h2>
        <p>
          Subtotal: {''}
          <span className="font-bold ">
            {formatCurrency(subTotalAmount)}
          </span>
        </p>
        <p>
          Propina: {''}
          <span className="font-bold ">
            {formatCurrency(tipAmmount)}
          </span>
        </p>
        <p>
          Total a pagar: {''}
          <span className="font-bold ">
            {formatCurrency(totalAmount)}
          </span>
        </p>
      </div>
      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={totalAmount === 0} onClick={placeOrder}>
        Guardar Orden
      </button>
    </>
  )
}