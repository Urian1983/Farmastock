// Debe coincidir con el enum FormatoMedicamento del backend (valores distintos → error 400 al deserializar).
export const FORMATOS = ['Comprimidos', 'Sobres', 'Cápsulas', 'Jarabe', 'Inhalador', 'Gotas', 'Masticables', 'Suspensión'];
export const ROLES = { FARMACEUTICO: 'FARMACEUTICO', CLIENTE: 'CLIENTE' };
export const STOCK_BAJO = 10;
export const STOCK_POR_DEFECTO = 10;
