import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'

/*const login = () => {*/
export default function Login() {  
        
        const formik = useFormik({
          initialValues: {
            nombre: '',
            apellido: '',
            email: '',
          },
          validationSchema: yup.object({
            nombre: yup.string("")
              .min(2, "El nombre debe tener como minimo 2 caracteres")  
              .required("El nombre es obligatorio"),
            apellido: yup.string("")
              .min(2, "El apellido debe tener como minimo 2 caracteres")    
              .required("El apellido es obligatorio"),
            email: yup.string("Ingresa tu email")
              .email("Ingrese un email valido")
              .required("El mail es obligatorio"),
          }),
          onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
          },
        });
        
        return (
          <div className="App">
            <h1>Validacion con Formik y Yup</h1>
      
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                />
                {formik.errors.nombre && formik.touched.nombre && (
                  <p>{formik.errors.nombre}</p>
                )}
              </div>
              <div>
                <label>Apellido</label>
                <input
                  type="text"
                  name="apellido"
                  value={formik.values.apellido}
                  onChange={formik.handleChange}
                />
                {formik.errors.apellido && formik.touched.apellido && (
                  <p>{formik.errors.apellido}</p>
                )}
              </div>
              <div>
                <label>Mail</label>
                <input
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <p>{formik.errors.email}</p>
                )}
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        )
}