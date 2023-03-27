import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

interface ModalProps {
  showRegister: boolean
  handleClose: () => void
  children?: React.ReactNode
}

const CustomModal: React.FC<ModalProps> = ({
  showRegister,
  handleClose,
  children,
}) => {
  const [showModal, setShowModal] = useState(showRegister)

  useEffect(() => {
    setShowModal(showRegister)
  }, [showRegister])

  const handleHide = () => {
    setShowModal(false)
    handleClose()
  }

  return (
    <Modal show={showModal} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal
