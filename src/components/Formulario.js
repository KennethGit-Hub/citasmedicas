import React, { Fragment } from 'react';

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear Cita</h2>

            <form >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                />
                <label>Nombre dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la Mascota"
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="Hora"
                    className="u-full-width"
                />
                <label>Sintomas</label>
                <textarea 
                    name="sintomas" 
                    className="u-full-width" 
                    >

                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita
                    </button>
            </form>
        </Fragment>
    );
}

export default Formulario;