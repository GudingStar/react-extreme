export interface EmailDataType {
    id: number,
    from: string,
    thumbnail: any,
    subject: string,
    time: string,
    To: string,
    emailExcerpt: string,
    emailContent:
    string,
    unread: boolean,
    checked: boolean,
    starred: boolean,
    important: boolean,
    inbox: boolean,
    sent: boolean,
    draft: boolean,
    spam: boolean,
    trash: boolean,
    label: string,
}