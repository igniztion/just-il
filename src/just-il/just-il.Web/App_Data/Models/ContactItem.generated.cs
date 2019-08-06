//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.10.102
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>_ContactItem</summary>
	[PublishedContentModel("contactItem")]
	public partial class ContactItem : PublishedContentModel
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "contactItem";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public ContactItem(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<ContactItem, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// #prop.Contact.Department: #prop.Contact.Department.d
		///</summary>
		[ImplementPropertyType("department")]
		public string Department
		{
			get { return this.GetPropertyValue<string>("department"); }
		}

		///<summary>
		/// #prop.Contact.Email: #prop.Contact.Email.d
		///</summary>
		[ImplementPropertyType("email")]
		public string Email
		{
			get { return this.GetPropertyValue<string>("email"); }
		}

		///<summary>
		/// #prop.Contact.FirstName: #prop.Contact.FirstName.d
		///</summary>
		[ImplementPropertyType("firstName")]
		public string FirstName
		{
			get { return this.GetPropertyValue<string>("firstName"); }
		}

		///<summary>
		/// #prop.Contact.Image: #prop.Contact.Image.d
		///</summary>
		[ImplementPropertyType("image")]
		public IPublishedContent Image
		{
			get { return this.GetPropertyValue<IPublishedContent>("image"); }
		}

		///<summary>
		/// #prop.Contact.LastName: #prop.Contact.LastName.d
		///</summary>
		[ImplementPropertyType("lastName")]
		public string LastName
		{
			get { return this.GetPropertyValue<string>("lastName"); }
		}

		///<summary>
		/// #prop.Contact.Lead: #prop.Contact.Lead.d
		///</summary>
		[ImplementPropertyType("lead")]
		public IHtmlString Lead
		{
			get { return this.GetPropertyValue<IHtmlString>("lead"); }
		}

		///<summary>
		/// #prop.Contact.Phone: #prop.Contact.Phone.d
		///</summary>
		[ImplementPropertyType("phone")]
		public string Phone
		{
			get { return this.GetPropertyValue<string>("phone"); }
		}

		///<summary>
		/// #prop.Contact.WorkTitle: #prop.Contact.WorkTitle.d
		///</summary>
		[ImplementPropertyType("workTitle")]
		public string WorkTitle
		{
			get { return this.GetPropertyValue<string>("workTitle"); }
		}
	}
}