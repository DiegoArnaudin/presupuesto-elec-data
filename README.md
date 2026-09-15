# presupuesto-elec-data

Datos que consume la app **Presupuesto Eléctrico** (presupuestos de mano de
obra para electricistas de CABA y GBA), servidos por GitHub Pages en
<https://diegoarnaudin.github.io/presupuesto-elec-data>.

| Archivo | Qué es |
| --- | --- |
| `index.json` | Manifiesto: último periodo disponible, URL de cada catálogo y su `sha256`. Es lo único que la app pide en cada chequeo. |
| `catalogos/AAAA-MM.json` | Un catálogo por periodo, con los precios sugeridos de ese mes. |
| `maestro/items.json` | Registro canónico de los códigos de ítem. Los códigos no se renombran ni se borran: los presupuestos guardados los referencian. |
| `maestro/tareas.json` | Recetas de las tareas guiadas del modo simple. |
| `schema/catalogo.schema.json` | JSON Schema al que tiene que conformar cada catálogo. |
| `privacidad.html` | Política de privacidad de la app. |

## No editar a mano

Este repo es un **espejo** de la carpeta `data/` del repo de la app. Todo se
genera y se valida allá (`validar.py` → `publicar.py`) y se copia acá con
`subir.py`. Un cambio hecho directamente sobre estos archivos se pierde en la
siguiente publicación, y además puede romper los `sha256` de `index.json`: si
un hash no coincide, la app descarta la actualización entera.

## Relación con AAIERIC

Los precios son los costos sugeridos que publica AAIERIC. La app es
independiente: no está afiliada ni avalada por AAIERIC.
