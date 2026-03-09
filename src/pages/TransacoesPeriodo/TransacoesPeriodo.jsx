import './TransacoesPeriodo.css'
import Nav from '../../componentes/Nav/Nav.jsx'
import { useNavigate, useLocation } from 'react-router-dom'
import TransacoesPeriodoComponente from '../../componentes/TransacoesPeriodoComponente/TransacoesPeriodoComponente.jsx'
const TransacoesPeriodo = () => {
    const location = useLocation()

    const periodoId = location.state?.periodoId


    return (
        <>
            <Nav />
            <TransacoesPeriodoComponente periodoId={periodoId} />
        </>
    )
}

export default TransacoesPeriodo