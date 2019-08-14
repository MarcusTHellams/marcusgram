import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {photo} from "./photo.entity";
import {user} from "./user.entity";


@Entity("comment",{schema:"ig_clone" } )
@Index("photo_id",["photo",])
@Index("user_id",["user",])
export class comment {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"comment_text"
        })
    comment_text:string;
        

   
    @ManyToOne(type=>photo, photo=>photo.comments,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'photo_id'})
    photo:photo | null;


   
    @ManyToOne(type=>user, user=>user.comments,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'user_id'})
    user:user | null;


    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        
}
