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
	/// <summary>#doctype.ArticlePage</summary>
	[PublishedContentModel("articlePage")]
	public partial class ArticlePage : PublishedContentModel, IPageContent
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "articlePage";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public ArticlePage(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<ArticlePage, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// #prop.ArticleSettings.HideAsideNavigation: #prop.ArticleSettings.HideAsideNavigation.d
		///</summary>
		[ImplementPropertyType("hideAsideNavigation")]
		public bool HideAsideNavigation
		{
			get { return this.GetPropertyValue<bool>("hideAsideNavigation"); }
		}

		///<summary>
		/// #prop.PageBodyText: #prop.PageBodyText.d
		///</summary>
		[ImplementPropertyType("bodyText")]
		public IHtmlString BodyText
		{
			get { return Umbraco.Web.PublishedContentModels.PageContent.GetBodyText(this); }
		}

		///<summary>
		/// #prop.PageHeadline: #prop.PageHeadline.d
		///</summary>
		[ImplementPropertyType("headline")]
		public string Headline
		{
			get { return Umbraco.Web.PublishedContentModels.PageContent.GetHeadline(this); }
		}

		///<summary>
		/// #prop.PageLead: #prop.PageLead.d
		///</summary>
		[ImplementPropertyType("lead")]
		public IHtmlString Lead
		{
			get { return Umbraco.Web.PublishedContentModels.PageContent.GetLead(this); }
		}

		///<summary>
		/// #prop.MainImage: #prop.MainImage.d
		///</summary>
		[ImplementPropertyType("mainImage")]
		public IPublishedContent MainImage
		{
			get { return Umbraco.Web.PublishedContentModels.PageContent.GetMainImage(this); }
		}
	}
}
