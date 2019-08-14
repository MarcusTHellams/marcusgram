import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {photo} from "./photo.entity";


@Entity("tag",{schema:"ig_clone" } )
@Index("tag_name",["tag_name",],{unique:true})
export class tag {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:true,
        unique: true,
        name:"tag_name"
        })
    tag_name:string | null;
        

    @Column("timestamp",{ 
        nullable:false,
        default: () => "CURRENT_TIMESTAMP",
        name:"created_at"
        })
    created_at:Date;
        

   
    @ManyToMany(type=>photo, photo=>photo.tags)
    photos:photo[];
    
}
