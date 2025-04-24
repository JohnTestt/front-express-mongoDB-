import { useState } from "react";
import { TableRow, TableCell, ActionButton, ActionButtonsContainer } from "./style/style";
import { Modal } from "../Modal/Modal";
import { SnackBar } from "../SnackBar/SnackBar";

export const TableCard = ({ id, nome, email, idade, telefone, onRemove, onEdit }) => {

  const [openModal, setOpenModal] = useState(false);
  const [openSnackBar, setOpenSnackbar] = useState(false);

  //modal

  const handleOpenModal = () => {
    setOpenModal(!openModal)
    
  };

  const handleCloseModal = () => {
    setOpenModal(false)
  };

  const handleRemoveUser = () => {
    onRemove(id)
    handleCloseModal();
    setOpenSnackbar(true);

    setTimeout(() => {
     
      setOpenSnackbar(false);
    }
    , 3000);
    

  }

  const handleEdit = (id) => {
    onEdit(id);
  }



  return (
    <>
      <TableRow>
        {/* <TableCell>{id}</TableCell> */}
        <TableCell>{nome}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{idade}</TableCell>
        <TableCell>{telefone}</TableCell>
        <TableCell>
          <ActionButtonsContainer>
            <ActionButton onClick={() => handleEdit(id)}>Editar</ActionButton>
            <ActionButton onClick={handleOpenModal}>Excluir</ActionButton>
          </ActionButtonsContainer>

        </TableCell>
      </TableRow> 

      {
        openModal && <Modal 
        title={'Deseja realmente excluir?'} 
        subtitle={'Ao confirmar, você irá apagar definitivamente o paciente'}
        open={openModal}
        close={() => handleCloseModal()}
        onConfirm={()=> handleRemoveUser(id)}  />
      }

      {
      openSnackBar &&  <  SnackBar open={openSnackBar} title={'Paciente excluído com sucesso!'} />
      }
    </>


  );
};


