import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {comment} from "./comment.entity";
import {follow} from "./follow.entity";
import {like} from "./like.entity";
import {photo} from "./photo.entity";


@Entity("user",{schema:"ig_clone" } )
@Index("username",["username",],{unique:true})
export class user {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        name:"username"
        })
    username:string;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        

   
    @OneToMany(type=>comment, comment=>comment.user,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    comments:comment[];
    

   
    @OneToMany(type=>follow, follow=>follow.follower,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    follows:follow[];
    

   
    @OneToMany(type=>follow, follow=>follow.followee,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    follows2:follow[];
    

   
    @OneToMany(type=>like, like=>like.user,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    likes:like[];
    

   
    @OneToMany(type=>photo, photo=>photo.user,{ onDelete: 'RESTRICT' ,onUpdate: 'RESTRICT' })
    photos:photo[];
    
}
