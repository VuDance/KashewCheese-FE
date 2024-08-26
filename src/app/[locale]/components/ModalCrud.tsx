import { Button, CircularProgress, Modal } from '@mui/material'
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
  isLoading?:boolean
}


const ModalCrud = ({ handleClose, open,children,handleDelete ,handleSave,title,isView,isLoading}: ModalCrudProps) => {
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
            {handleDelete && <Button variant='outlined' className='text-white hover:bg-red-400 normal-case bg-red-500 disabled:bg-disabled disabled:text-disabled disabled:cursor-not-allowed' onClick={handleDelete}>{isLoading?<CircularProgress size={20} />:t("Delete")}</Button>}
            {handleSave && !isView && <Button disabled={isLoading} onClick={handleSave} variant='outlined' className='text-white normal-case hover:bg-blue-400 bg-blue-500 disabled:bg-disabled disabled:text-disabled disabled:cursor-not-allowed'>{isLoading?<CircularProgress size={20} />: title.includes("Create")? t("Create"):t("Edit")}</Button>}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ModalCrud