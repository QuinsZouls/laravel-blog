import React from "react";
import { Head } from "@inertiajs/inertia-react";
/**
 * Componente para renderizar la vista del blog
 * @param {*} props
 * @returns
 */
export default function PostEdition(props) {
    console.log(props);
    return (
        <div className="post-edition">
            <Head title="Blogs" />
            <div className="wrapper">
                <h3 className="title">Crear articulo</h3>
                <form method="post" action="/post">
                    <input type="hidden" name="_token" value={props.auth} />
                    <label>
                        Titulo
                        <br />
                        <input
                            placeholder="Titulo"
                            name="title"
                            className="border-2"
                        />
                    </label>
                    <label>
                        Descripción
                        <br />
                        <input
                            placeholder="Titulo"
                            name="description"
                            className="border-2"
                        />
                    </label>
                    <button type="submit">Crear</button>
                </form>
            </div>
        </div>
    );
}
