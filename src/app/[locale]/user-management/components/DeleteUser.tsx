import React from 'react'
import ModalCrud from '../../components/ModalCrud'

interface DeleteUserProps {
    handleClose: () => void,
    open: boolean,
    handleDelete?: (data: any) => void,
    title: string,
}

const DeleteUser = ({ title, open, handleDelete, handleClose }: DeleteUserProps) => {
  return (
    <ModalCrud isView={false} title={title} open={open} handleDelete={handleDelete} handleClose={handleClose}>
        <div>
            Bạn có chắc chắn muốn xóa người dùng này ?
        </div>
    </ModalCrud>
  )
}

export default DeleteUser