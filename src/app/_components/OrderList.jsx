import React from 'react'
import { CheckIcon, ClockIcon} from 'lucide-react'

const products = [
    {
      id: 1,
      name: 'Bugger',
      href: '#',
      imageSrc: '/food/food1.png',
      imageAlt: "Correct bugger",
      price: '35',
      description: 'Chop the best and qaulity bugger',
    },
    {
      id: 2,
      name: 'Chickens',
      href: '#',
      imageSrc: '/food/chiken.jpg',
      imageAlt: "Get the best chiken",
      price: '35',
      description: 'Chiken and chips with a chill drink',
      inStock: true
    },
    {
      id: 3,
      name: 'Swallow',
      href: '#',
      imageSrc: '/food/food1.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '35',
      description: 'Our Piza is one in town, enjoy it to the fullest',
      inStock: true
    },
    
  ]

const OrderList = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Order List</h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your order list
            </h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                            {product.name}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    
                    </div>

                    <div className="mt-4 flex flex-1 items-end justify-between">
                      <p className="flex items-center space-x-2 text-sm text-gray-700">
                        {product.inStock ? (
                          <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                        ) : (
                          <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                        )}

                        {/* <span>{product.inStock ? 'In stock' : `Will ship in ${product.leadTime}`}</span> */}
                      </p>
                      <div className="ml-4">
                        <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">$96.00</dd>
                </div>
              </dl>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Delivery</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">$4.00</dd>
                </div>
              </dl>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">$100.00</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">You will get you order at the specified location in 20 min.</p>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-orange-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>
            </div>

            <div className="mt-6 text-center text-sm">
              <p>
                or{' '}
                <a href="#" className="font-medium text-gray-600 hover:text-gray-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default OrderList