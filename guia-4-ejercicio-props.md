# Ejercicio 1: Prop Drilling con Props Tipadas

## Descripción  
Construir una estructura de componentes donde un componente padre pasa datos y funciones como Props tipadas a componentes hijos y nietos. Usar interfaces de TypeScript para definir Props.

## Estructura de archivos  
- `Parent.tsx`  
- `Child.tsx`  
- `Grandchild.tsx`  

## Instrucciones  
1. Definir interfaces para las Props en cada componente.  
2. Pasar un estado y función para modificarlo desde `Parent` hacia `Grandchild` a través de `Child`.  
3. Mostrar el dato en el `Grandchild` y permitir modificarlo desde allí mediante la función pasada por Props.  