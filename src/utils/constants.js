export const DB_NAME = "basecamp";


export const UserRolesEnum = {
    ADMIN:"admin",
    PROJECT_ADMIN:"project_admin",
    MEMBER:"member"
}

export const availableUserRoles = Object.values(UserRolesEnum);


export const taskStatusEnum = {
    PENDING:"pending",
    IN_PROGRESS:"in_progress",
    DONE:"done"
}

export const availableTaskStatus = Object.values(taskStatusEnum);