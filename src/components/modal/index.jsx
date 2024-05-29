import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

export default function Modal({ open, setOpen, data }) {
  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setOpen}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="w-80 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className='flex justify-end'>
                        <button
                            type="button"
                            className="inline-flex w-fit rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={() => setOpen(false)}
                        >
                            x
                        </button>
                    </div>
                  <div className="sm:flex sm:items-start">
                    <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${data?.isError ? 'bg-red-100':'bg-emerald-100'} sm:mx-0 sm:h-10 sm:w-10`}>
                        {data?.isError && (
                            <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        )}
                        {!data?.isError && (
                            <CheckCircleIcon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                        )}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900 capitalize">
                        {data?.massage}
                      </DialogTitle>
                      {/* <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {data?.massage}
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
