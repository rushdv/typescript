// enum
// set of fixed string lereral ek jaigai rakhe 

//type UserRole = "admin" | "editor" | "viewer"

enum UserRoles {
    Admin = "admin",
    Editor = "editor",
    Viewer = "viewer",
}

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true
    }
    return false
}

const isEditPermiddable = canEdit(UserRoles.Admin)
console.log(isEditPermiddable)
