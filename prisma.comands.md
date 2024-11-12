# 📝 1. Crear y aplicar una nueva migración
npx prisma migrate dev --name nombre_migracion

# 🚀 2. Aplicar todas las migraciones pendientes
npx prisma migrate deploy

# 🔄 3. Resetear la base de datos (elimina todas las tablas y datos) y aplicar migraciones desde cero
npx prisma migrate reset

# 🔄 4. Sincronizar el esquema Prisma con la base de datos sin crear migraciones
npx prisma db push

# 🗑️ 5. Borrar todas las migraciones locales (opcional)
rm -rf prisma/migrations

# 🎨 6. Abrir Prisma Studio (interfaz gráfica para visualizar y editar datos)
npx prisma studio

# 7. instalar prisma client
npm install prisma @prisma/client

# 8. iniciaizar
npx prisma init

# 9. prisma generate
npx prisma generate