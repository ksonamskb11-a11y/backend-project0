import z from 'zod';

export const userRegistrationValidatorSchema = z.object({
    fullName: z.string().min(5, 'min.. 5 letters').max(20, 'max is 20'),
    userName: z.string().min(3).max(20),
    email: z
        .string()
        .regex(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Invalid email format'
        )
        .toLowerCase()
        .trim()
        .min(1), 
    password: z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Invalid password format'
        )
        .min(5)
        .max(50),
});

export const userLoginValidatorSchema = z.object({
    email: z.string().email().toLowerCase().trim(), 
    password: z.string().min(5).max(50),
});
