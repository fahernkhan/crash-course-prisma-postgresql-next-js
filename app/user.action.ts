'use server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerResponse() {
    return 'Server Action Called!'
}

export async function addUser() {
    return await prisma.user.create({
        data: {
            name: 'Kumar Programming',
            email: 'kkyprogramming@gmail.com'
        }
    });
}

export async function loadUser(id: string) {
    return await prisma.user.findUnique({
      where: {id}
    });
}

export async function updateUser(id: string) {
    return await prisma.user.update({
        where: { id },
        data: {
            name: 'update Kumar Programming',
            email: 'update@gmail.com'
        }
    });
}

export async function deleteUser(id: string) {
    return await prisma.user.delete({
        where: { id }
    });
}