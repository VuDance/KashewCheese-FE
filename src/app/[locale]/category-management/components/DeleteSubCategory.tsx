import React from 'react'
import ModalCrud from '../../components/ModalCrud'

interface DeleteSubCategoryProps {
    handleClose: () => void,
    open: boolean,
    handleDelete?: (data: any) => void,
    title: string,
}

const DeleteSubCategory = ({ title, open, handleDelete, handleClose }: DeleteSubCategoryProps) => {
  return (
    <ModalCrud isView={false} title={title} open={open} handleDelete={handleDelete} handleClose={handleClose}>
        <div>
            Bạn có chắc chắn muốn xóa danh mục con này ?
        </div>
    </ModalCrud>
  )
}

export default DeleteSubCategory