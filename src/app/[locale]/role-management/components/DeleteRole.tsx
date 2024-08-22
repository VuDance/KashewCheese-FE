import React from 'react'
import ModalCrud from '../../components/ModalCrud'

interface DeleteRoleProps {
    handleClose: () => void,
    open: boolean,
    handleDelete?: (data: any) => void,
    title: string,
}

const DeleteRole = ({ title, open, handleDelete, handleClose }: DeleteRoleProps) => {
  return (
    <ModalCrud isView={false} title={title} open={open} handleDelete={handleDelete} handleClose={handleClose}>
        <div>
            Bạn có chắc chắn muốn xóa vai trò này ?
        </div>
    </ModalCrud>
  )
}

export default DeleteRole