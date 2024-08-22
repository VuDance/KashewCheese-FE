import { Button, Modal } from '@mui/material'
import { useTranslations } from 'next-intl'
import React from 'react'

interface ModalCrudProps {
  handleClose: () => void,
  open: boolean,
  children: React.ReactNode,
  handleSave?:(data: any) => void,
  handleDelete?:(data: any) => void,
  title: string,
  isView: boolean,
}


const ModalCrud = ({ handleClose, open,children,handleDelete ,handleSave,title,isView}: ModalCrudProps) => {
  const t=useTranslations("Button")
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-white flex flex-col justify-between max-w-[80vw] p-5'>
          <div>
            <div className='font-semibold text-lg border-b pb-3 mb-3'>{title}</div>
            {children}
          </div>
          <div className='flex gap-3 justify-end pt-3 border-t mt-3'>
            <Button className='normal-case text-black' variant='outlined' onClick={handleClose}>{t("Cancel")}</Button>
            {handleDelete && <Button variant='outlined' className='text-white hover:bg-red-400 normal-case bg-red-500'>{t("Delete")}</Button>}
            {handleSave && !isView && <Button variant='outlined' className='text-white normal-case hover:bg-blue-400 bg-blue-500'>{t("Create")}</Button>}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalCrud