
export default async function setOrder(order) {
  const request = await fetch("http://localhost:4200/api/v1/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order)
  })
}
