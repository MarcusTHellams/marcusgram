import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {user} from "./user.entity";
import {comment} from "./comment.entity";
import {like} from "./like.entity";
import {tag} from "./tag.entity";


@Entity("photo",{schema:"ig_clone" } )
@Index("user_id",["user",])
export class photo {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        name:"image_url"
        })
    image_url:string;
        

   
    @ManyToOne(type=>user, user=>user.photos,{  nullable:false,onDelete: 'RESTRICT',onUpdate: 'RESTRICT' })
    @JoinColumn({ name:'user_id'})
    user:user | null;


    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        

   
    @OneToMany(type=>comment, comment=>comment.photo,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    comments:comment[];
    

   
    @OneToMany(type=>like, like=>like.photo,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    likes:like[];
    

   
    @ManyToMany(type=>tag, tag=>tag.photos,{  nullable:false, })
    @JoinTable({ name:'photo_tag'})
    tags:tag[];
    
}
