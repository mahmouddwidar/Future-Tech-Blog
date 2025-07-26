import prisma from '../src/lib/prisma';
import bcrypt from 'bcrypt';


async function main() {
    const adminEmail = 'root@root.com';
    const adminPassword = 'root';
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Upsert admin user
    await prisma.user.upsert({
        where: { email: adminEmail },
        update: {},
        create: {
            first_name: 'Admin',
            last_name: 'User',
            email: adminEmail,
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log('Admin user seeded!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });