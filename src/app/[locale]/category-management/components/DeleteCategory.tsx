import React from 'react'
import ModalCrud from '../../components/ModalCrud'

interface DeleteCategoryProps {
    handleClose: () => void,
    open: boolean,
    handleDelete?: (data: any) => void,
    title: string,
}

const DeleteCategory = ({ title, open, handleDelete, handleClose }: DeleteCategoryProps) => {
  return (
    <ModalCrud isView={false} title={title} open={open} handleDelete={handleDelete} handleClose={handleClose}>
        <div>
            Bạn có chắc chắn muốn xóa danh mục này ?
        </div>
    </ModalCrud>
  )
}

export default DeleteCategory