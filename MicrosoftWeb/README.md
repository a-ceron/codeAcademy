# Primeros pasos en Razor y NET Core

Para configurar un proyecto .NET

1. VSCode > Archivo > Abrir Carpeta 
2. Crear caroeta y seleccionar
3. En una terminal
'''Shell
dotnet new webapp -f net6.0
'''

## Creación de una página
'''Shell
dotnet new page --name Pizza --namespace RazorPagesPizza.Pages --output Pages
'''
El comando anterior crea los archivos en el espacio de nombres RazorPagesPizza.pages, genera los archivos .cshtml y .cshtml.cs. 
Todo lo almacen aen el directorio Pages del proyecto
