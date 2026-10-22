import Modal from '../../components/ui/Modal';

export default function PrivacidadModal({ onClose }) {
  return (
    <Modal title="Política de Privacidad" size="modal-lg" onClose={onClose}
      footer={<button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>}>
      <p className="small text-muted">Los datos resaltados en amarillo, <span className="dato">[así]</span>, deben sustituirse por los de la farmacia antes de publicar.</p>
      <h6>1. Responsable del tratamiento</h6>
      <p><span className="dato">[Nombre / razón social]</span>, NIF <span className="dato">[NIF]</span>, con domicilio en <span className="dato">[dirección]</span>.
        Contacto: <span className="dato">[e-mail]</span> · <span className="dato">[teléfono]</span>.
        Delegado de Protección de Datos (DPD): <span className="dato">[nombre y e-mail del DPD]</span>.</p>
      <h6>2. Marco normativo</h6>
      <p>El tratamiento de datos se rige por el Reglamento General de Protección de Datos (UE 2016/679, RGPD), la Ley Orgánica 3/2018 (LOPDGDD),
        la Ley 41/2002 de Autonomía del Paciente, la Ley 34/2002 (LSSI-CE) y la normativa sanitaria y del medicamento aplicable a las oficinas de farmacia.</p>
      <h6>3. Datos que tratamos</h6>
      <ul>
        <li><b>Datos de salud (categoría especial, art. 9 RGPD):</b> tratamientos farmacológicos, recetas médicas (físicas o electrónicas), registros de dispensación y, en su caso, parámetros de seguimiento.</li>
        <li><b>Datos identificativos y de contacto:</b> nombre, DNI, dirección, e-mail y teléfono.</li>
        <li><b>Datos de los usuarios de esta aplicación:</b> nombre de usuario, clave de acceso (almacenada de forma protegida) y rol asignado.</li>
        <li><b>Datos de personal y proveedores:</b> los necesarios para la gestión laboral, contable y de facturación.</li>
        <li><b>Imágenes</b> captadas por el sistema de videovigilancia del establecimiento.</li>
      </ul>
      <h6>4. Finalidades y base jurídica</h6>
      <ul>
        <li><b>Dispensación de medicamentos y atención sanitaria:</b> obligación legal y prestación sanitaria (arts. 6.1.c y 9.2.h RGPD). En los datos derivados de la receta médica no es necesario su consentimiento (art. 19.2 del Real Decreto 1718/2010), y están protegidos por el deber de secreto profesional.</li>
        <li><b>Atención farmacéutica personalizada, seguimiento voluntario, ficheros comerciales, boletines, promociones y tarjetas de fidelización:</b> consentimiento explícito (art. 9.2.a RGPD), que se otorga mediante una acción positiva y puede retirarse en cualquier momento.</li>
        <li><b>Gestión de usuarios y del inventario de medicamentos de esta aplicación:</b> interés legítimo en la gestión y seguridad del establecimiento y ejecución de la relación con el personal autorizado.</li>
        <li><b>Farmacovigilancia, trazabilidad de medicamentos controlados e intereses vitales:</b> cumplimiento de obligaciones legales y protección de intereses vitales, sin necesidad de consentimiento.</li>
        <li><b>Videovigilancia:</b> seguridad de las personas, bienes e instalaciones.</li>
      </ul>
      <h6>5. Destinatarios y encargados del tratamiento</h6>
      <p>Sus datos no se ceden a terceros salvo obligación legal (autoridades sanitarias, Administración tributaria, Fuerzas y Cuerpos de Seguridad, jueces y tribunales).
        Pueden acceder a ellos, como encargados del tratamiento y bajo contrato conforme al art. 28 RGPD, las asesorías laborales, fiscales y contables, los proveedores de software de gestión y alojamiento,
        las entidades de prevención de riesgos laborales y las empresas de videovigilancia. Los prestadores de servicios sin acceso a datos (limpieza, mantenimiento básico) firman un compromiso de confidencialidad.</p>
      <h6>6. Transferencias internacionales</h6>
      <p>No se realizan transferencias de datos fuera del Espacio Económico Europeo, salvo que el proveedor ofrezca garantías adecuadas, como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.</p>
      <h6>7. Plazos de conservación</h6>
      <p>Los datos se conservan mientras dure la relación y, después, durante los plazos exigidos por la normativa sanitaria, fiscal y laboral. Cuando proceda su supresión, pero deban conservarse por obligación legal,
        se mantienen bloqueados y sin uso hasta que expire ese plazo. Las grabaciones de videovigilancia se conservan como máximo un mes, salvo que sean requeridas por un incidente judicial o policial.</p>
      <h6>8. Sus derechos</h6>
      <p>Puede ejercer, de forma gratuita, los derechos de <b>acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad</b>,
        así como el derecho a no ser objeto de decisiones basadas únicamente en tratamientos automatizados ni de perfiles comerciales. Para ello, escriba a <span className="dato">[e-mail]</span>
        o a la dirección postal indicada, adjuntando copia de un documento identificativo. El derecho de supresión de los datos de salud queda limitado por la obligación legal de conservar los registros y recetas.</p>
      <p>Si considera que sus derechos no han sido atendidos, puede presentar una reclamación ante la Agencia Española de Protección de Datos (<b>www.aepd.es</b>).</p>
      <h6>9. Medidas de seguridad</h6>
      <p>Aplicamos medidas técnicas y organizativas adecuadas: credenciales individuales, perfiles con acceso restringido según el puesto, cifrado de la información sensible, copias de seguridad periódicas,
        custodia bajo llave y destrucción confidencial de la documentación en papel, y bloqueo de sesión de los equipos. Todo el personal está sujeto a un deber de secreto y recibe formación periódica.
        Ante una brecha de seguridad, se notificará a la AEPD en un máximo de 72 horas y se informará a los afectados cuando exista un alto riesgo para sus derechos y libertades.</p>
      <h6>10. Cookies, web y redes sociales</h6>
      <p>El uso de cookies no necesarias requiere su consentimiento previo, que se gestiona mediante el aviso de cookies. No publicamos datos identificativos ni de salud de clientes en redes sociales,
        ni atendemos consultas sanitarias en canales abiertos.</p>
      <h6>11. Actualizaciones</h6>
      <p>Esta política puede modificarse para adaptarla a cambios normativos o de nuestros tratamientos. Última actualización: <span className="dato">[fecha]</span>.</p>
    
    </Modal>
  );
}
